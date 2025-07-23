from manim import *

class PentagonScene(Scene):
    def construct(self):
        pentagon = RegularPolygon(n=5)
        self.play(Create(pentagon))
        self.wait(1)