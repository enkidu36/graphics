(ns pbranes.page.book.ch02
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))

(set! *warn-on-infer* false)

(def vs-shader
  "#version 300 es
precision mediump float;

// Supplied vertex position attribute
 in  vec3 aVertexPosition;

void main(void) {
  // Set the position in the clipspace coordinates
  gl_Position = vec4(aVertexPosition, 1.0);
}
")

(def fs-shader
  "#version 300 es
  precision mediump float;

 // Color that is the result of this shader
  out  vec4 fragColor;

  void main(void) {
      fragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
")

(def square-vertex-buffer (atom nil))
(def square-index-buffer  (atom nil))
(def program (atom nil))
(def indices [0 1 2 0 2 3])

(defn get-shader [gl source type]
  (let [shader (.createShader gl type)]

    ;; Compile the shader using the supplied shader code
    (.shaderSource gl shader source)
    (.compileShader gl shader)

    ;; Ensure the shader is valid
    (if  (not (.getShaderParameter gl shader (.-COMPILE_STATUS gl)))
      (js/console.log  (.getShaderInfoLog gl shader))
      shader)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Create a program with the appropriate vertex and fragment shaders
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn init-program [gl]
  (let [vertex-shader (get-shader gl vs-shader (.-VERTEX_SHADER gl))
        fragment-shader (get-shader gl fs-shader (.-FRAGMENT_SHADER gl))]

    ;; Create program
    (reset! program (.createProgram gl))

    ;; Attach the shaders to the program
    (.attachShader gl @program vertex-shader)
    (.attachShader gl @program fragment-shader)
    (.linkProgram gl @program)

    (when (not (.getProgramParameter gl @program (.-LINK_STATUS gl)))
      (js/console.error  "Could not initialize shaders."))

    ;; Use this program instance
    (.useProgram gl @program)

    ;; We attach the location of these shaders values to the program instance
    ;; for easy access later in the code
    (set! (.-aVertexPosition gl)  (.getAttribLocation gl @program "aVertexPosition"))))

(defn init-buffers [gl]
  (let [vertices  [-0.5 0.5 0        -0.5 -0.5 0         0.5 -0.5 0    0.5 0.5 0]]

;; Setting up the VBO
    (reset! square-vertex-buffer (.createBuffer gl))
    (.bindBuffer gl (.-ARRAY_BUFFER gl) @square-vertex-buffer)
    (.bufferData gl (.-ARRAY_BUFFER gl) (js/Float32Array.  vertices) (.-STATIC_DRAW gl))

    ;; Setting up the IBO
    (reset! square-index-buffer (.createBuffer gl))
    (.bindBuffer gl  (.-ELEMENT_ARRAY_BUFFER gl) @square-index-buffer)
    (.bufferData  gl (.-ELEMENT_ARRAY_BUFFER gl) (js/Uint16Array.  indices) (.-STATIC_DRAW gl))

    ;; Clean
    (.bindBuffer gl (.-ARRAY_BUFFER gl) nil)
    (.bindBuffer gl (.-ELEMENT_ARRAY_BUFFER gl) nil)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; We call to render to our canvas
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn draw [gl]
  ;; Clear the screen
  (.clear gl  (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
  (.viewport gl 0 0 (.. gl  -canvas -width) (.. gl -canvas -height))

  ;; Use the buffers we've constructed
  (.bindBuffer gl (.-ARRAY_BUFFER gl) @square-vertex-buffer)
  (.vertexAttribPointer gl (.-aVertexPosition @program) 3 (.-FLOAT gl) false 0 0)
  (.enableVertexAttribArray gl (.-aVertexPosition @program))

  ;; Bind IBO
  (.bindBuffer gl (.-ELEMENT_ARRAY_BUFFER gl) @square-index-buffer)

  ;; Draw t the scened using triangle primitives
  (.drawElements gl (.-TRIANGLES gl) (count indices) (.-UNSIGNED_SHORT gl) 0)

  ;; Clean
  (.bindBuffer gl (.-ARRAY_BUFFER gl) nil)
  (.bindBuffer gl  (.-ELEMENT_ARRAY_BUFFER gl) nil)

  ;;
  )

(defn main [canvas]
  (set! (.-width canvas) (- (.-clientWidth (.-parentNode canvas)) 60))
  (set! (.-height canvas) (.-clientHeight (.-parentNode canvas)))
  (let [gl (u/get-webgl-context canvas)]

    (.clearColor gl 0 0 0 1)

    ;; Call the functions in an appropriate order
    (init-program gl)
    (init-buffers gl)
   (draw gl)
    ))

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect []
                      :once
                      (set! (.-width canvas) (.-innerWidth js/window))
                      (js/console.log "width" (.-width canvas))
                      (main (.-current canvas)))
    (d/canvas {:id "ch02-canvas" :ref canvas :class "canvas"})))
