(ns pbranes.page.book.ch02-modes
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            ["dat.gui" :as gui]
            [pbranes.webgl.constants :as wc]
            [pbranes.webgl.utils :as u]))

(set! *warn-on-infer* false)

(def rendering-mode (atom  "TRIANGLES"))
(def rendering-mode-opts  ["TRIANGLES"
                           "LINES"
                           "POINTS"
                           "LINE_LOOP"
                           "LINE_STRIP"
                           "TRIANGLE_STRIP"
                           "TRIANGLE_FAN"])
(def settings    {:name "Rendering Mode"
                  :value @rendering-mode
                  :options rendering-mode-opts
                  :on-change (fn [v] (reset! rendering-mode v))})

(def vertex-shader "#version 300 es 
precision mediump float;

in vec3 aVertexPosition;

void main(void) {
  gl_PointSize = 40.0;
  gl_Position = vec4(aVertexPosition, 1.0);
}
")

(def fragment-shader "#version 300 es 
precision mediump float;

out vec4 fragColor;

void main(void) {
  fragColor = vec4(0.5, 0.5, 1.0, 1.0);
}
")

(def program (atom nil))
(def trapezoid-VAO (atom nil))
(def dat-gui (atom nil))

(defn render-element [gl indices type]
  (.bufferData gl wc/ELEMENT-ARRAY-BUFFER (js/Uint16Array. indices) (.-STATIC_DRAW gl))
  (.drawElements gl type (count indices) (.-UNSIGNED_SHORT gl) 0))

(defn init-program [gl]
  (let [v-shader (u/get-shader gl vertex-shader (.-VERTEX_SHADER gl))
        f-shader (u/get-shader gl fragment-shader (.-FRAGMENT_SHADER gl))]

    (reset! program (.createProgram gl))
    (.attachShader gl @program v-shader)
    (.attachShader gl @program f-shader)
    (.linkProgram gl @program)

    (when (not (.getProgramParameter gl @program (.-LINK_STATUS gl)))
      (js/console.error "Could not initialize shaders"))

    (.useProgram gl @program)
    (set! (.-aVertexPosition @program) (.getAttribLocation gl @program "aVertexPosition"))))

(defn init-buffers [gl]
  (let [vertices [-0.5 -0.5 0   -0.25 0.5 0   0.0 -0.5 0     0.25 0.5 0     0.5 -0.5 0]
        indices [0 1 2 0 2 3 2 3 4]
        trapezoid-vertex-buffer (.createBuffer gl)
        trapezoid-index-buffer (.createBuffer gl)]

    ;; Bind VAO
    (reset! trapezoid-VAO (.createVertexArray gl))
    (.bindVertexArray gl @trapezoid-VAO)

    (.bindBuffer gl wc/ARRAY-BUFFER trapezoid-vertex-buffer)
    (.bufferData gl wc/ARRAY-BUFFER (js/Float32Array. vertices) wc/STATIC-DRAW)

    ;; Provide instructions to VAO
    (.vertexAttribPointer gl (.-aVertexPosition @program) 3 (.-FLOAT gl) false 0 0)
    (.enableVertexAttribArray gl (.-aVertexPosition @program))

    (.bindBuffer gl (.-ELEMENT_ARRAY_BUFFER gl) trapezoid-index-buffer)
    (.bufferData gl (.-ELEMENT_ARRAY_BUFFER gl) (js/Uint16Array. indices) (.-STATIC_DRAW gl))

    ;; Clean
    (.bindVertexArray gl nil)
    (.bindBuffer gl (.-ARRAY_BUFFER gl) nil)
    (.bindBuffer gl (.-ELEMENT_ARRAY_BUFFER gl) nil)))

(defn draw [gl]

  (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
  (.viewport gl 0 0 (.. gl -canvas -width) (.. gl  -canvas -height))

  ;; Bind VAO
  (.bindVertexArray gl @trapezoid-VAO)

 (case @rendering-mode
    "TRIANGLES"
    (render-element gl  [0 1 2 2 3 4] (.-TRIANGLES gl))

    "LINES"
    (render-element gl [1 3 0 4 1 2 2 3] (.-LINES gl))

    "POINTS"
    (render-element gl  [1 2 3] (.-POINTS gl))

    "LINE_LOOP"
    (render-element gl [2 3 4 1 0] (.-LINE_LOOP gl))

    "LINE_STRIP"
    (render-element gl [2 3 4 1 0] (.-LINE_STRIP gl))

    "TRIANGLE_STRIP"
    (render-element gl [0 1 2 3 4] (.-TRIANGLE_STRIP gl))

    "TRIANGLE_FAN"
    (render-element gl [0 1 2 3 4] (.-TRIANGLE_FAN gl))))

(defn init [canvas]
  (set! (.-width canvas) (- (.-clientWidth (.-parentNode canvas)) 60))
  (set! (.-height canvas) (.-clientHeight (.-parentNode canvas)))
  (let [gl (u/get-webgl-context canvas)]
    (.clearColor gl 0 0 0 1)
    (.enable gl (.-DEPTH_TEST gl))

    ;; Call the functions in an appropriate order
    (init-program gl)
    (init-buffers gl)
    (reset! dat-gui  (u/configure-controls settings))
    (let [render (fn render []
                   (draw gl)
                   (js/requestAnimationFrame render))]
      (js/requestAnimationFrame render))))

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect [rendering-mode]
      :always
      (init (.-current canvas))
      (fn unmount []
        (.destroy  (.getRoot @dat-gui))

        (reset! dat-gui nil)))

    (d/canvas {:id "mode-cvs" :ref canvas :class "canvas"})))
