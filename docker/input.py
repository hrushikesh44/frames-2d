from manim import *

class CreateCircle(Scene):
    def construct(self):
        circle = Circle(radius=2, color=BLUE)
        dot = Dot(point=circle.get_center(), color=RED)
        text = Text("Circle", font_size=36).next_to(circle, UP)

        self.play(Create(circle), Create(dot), Write(text))
        self.wait(2)
        self.play(FadeOut(circle), FadeOut(dot), FadeOut(text))
        self.wait(1)