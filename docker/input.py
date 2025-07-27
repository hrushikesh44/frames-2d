from manim import *

class CircleAndArrows(Scene):
    def construct(self):
        circle_frontend = Circle(radius=1, color=BLUE).shift(LEFT * 3)
        text_frontend = Text("Frontend").scale(0.7).move_to(circle_frontend.get_center())

        circle_backend = Circle(radius=1, color=GREEN)
        text_backend = Text("Backend").scale(0.7).move_to(circle_backend.get_center())

        circle_database = Circle(radius=1, color=RED).shift(RIGHT * 3)
        text_database = Text("Database").scale(0.7).move_to(circle_database.get_center())

        self.play(Create(circle_frontend), Write(text_frontend))
        self.play(Create(circle_backend), Write(text_backend))
        self.play(Create(circle_database), Write(text_database))

        arrow1 = Arrow(circle_frontend.get_right(), circle_backend.get_left(), buff=0.1)
        arrow2 = Arrow(circle_backend.get_right(), circle_database.get_left(), buff=0.1)
        arrow3 = Arrow(circle_database.get_left(), circle_backend.get_right(), buff=0.1)
        arrow4 = Arrow(circle_backend.get_left(), circle_frontend.get_right(), buff=0.1)

        self.play(GrowArrow(arrow1))
        self.wait(0.5)
        self.play(GrowArrow(arrow2))
        self.wait(0.5)
        self.play(GrowArrow(arrow3))
        self.wait(0.5)
        self.play(GrowArrow(arrow4))
        self.wait(1)