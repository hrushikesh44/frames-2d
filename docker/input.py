from manim import *

class SceneClass(Scene):
    def construct(self):
        circle = Circle(radius=2, color=WHITE, fill_opacity=1)
        circle.set_fill(color=[YELLOW, BLUE], opacity=1)
        self.play(Create(circle))
        self.wait(1)