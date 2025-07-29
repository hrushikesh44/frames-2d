from manim import *

class ShapeMorph(Scene):
    def construct(self):
        circle = Circle(radius=1, color=BLUE)
        square = Square(side_length=2, color=GREEN).move_to(circle)
        rectangle = Rectangle(width=3, height=1.5, color=RED).move_to(circle)

        self.play(Create(circle))
        self.wait(0.5)
        self.play(Transform(circle, square), run_time=2)
        self.wait(0.5)
        self.play(Transform(square, rectangle), run_time=2)
        self.wait(1)