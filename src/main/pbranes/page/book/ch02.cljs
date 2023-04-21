(ns pbranes.page.book.ch02
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))

(set! *warn-on-infer* false)

(def vs-shader
  "
#version 300 es 
precision mediump float;

uniform mat4 uModelViewMatrix;
unitorm mat4 uProjectionMatrix;

in vec3 aVertexPosition;

void main(void) {
gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
}
")

(def fs-shader
  "
  #version 300 es 
  precision mediump float;

  out vec4 fragColor;

  void main(void) {
      fragColor = vec4(uModelColor, 1.0);
  }
")

(defn init-program [gl]
  (let [vertex-shader (.getShader gl vs-shader)
        fragment-shader (.getShader gl fs-shader)
        program (.createProgram gl)]

    ;; Attach the shaders to the program
    (.attachShader gl program vertex-shader)
    (.attachShader gl program fragment-shader)
    (.linkProgram gl program)

    (if (not (.getProgramParameter gl program (.-LINK_STATUS gl)))
      (js/console.error  "Could not initialize shaders."))

    ;; Use this program instance
    (.useProgram gl program)
    
    ;; We attache the location of these shaders values to the program instance
    ;; for easy access later in the code
    (swap! (.-aVertexPosition gl) (.getAttribLocation gl program "aVertexPosition"))))

(defn init-buffers [gl]
  (let [vertices  [-0.5 0.5 0         -0.5 -0.5 0         0.5 0.5 0]
        indicies [0 1 2 0 2 3]
        square-vertex-buffer (.createBuffer gl)
        square-index-buffer (.createBuffer gl)]

    ;; Setting up the VBO
    (.bindBuffer gl (.-ARRAY_BUFFER gl) square-vertex-buffer)
    (.bindBufferData gl (.-ARRAY_BUFFER gl) (js/Float32Array.  vertices) (.-STATIC_DRAW gl))

    ;; Setting up the IBO
    (.bindBuffer gl  (.-ELEMENT_ARRAY_BUFFER gl) square-index-buffer)
    (.bindData gl (.-ELEMENT_ARRAY_BUFFER gl) (js/Uint16Array.  indicies) (.-STATIC_DRAW gl))

    ;; Clean
    (.bindBuffer gl (.-ARRAY_BUFFER gl) nil)
    (.bindBuffer.gl (.-ELEMENT_ARRAY_BUFFER gl) nil)
    ))

(defn main [canvas]
  (set! (.-width canvas) (- (.-clientWidth (.-parentNode canvas)) 60))
  (set! (.-height canvas) (.-clientHeight (.-parentNode canvas)))
  (let [gl (u/get-webgl-context canvas)]

    (.clearColor gl 0 0 0 1)
    (.enable gl (.-DEPTH-TEST  gl))))

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect []
                      :once
                      (set! (.-width canvas) (.-innerWidth js/window))
                      (js/console.log "width" (.-width canvas))
                      (main (.-current canvas)))
    (d/canvas {:id "ch02-canvas" :ref canvas :class "canvas"})))
