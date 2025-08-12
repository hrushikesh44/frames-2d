from manim import *

class NewtonLaws(Scene):
    def construct(self):
        law1_text = Text("Newton's First Law", font_size=24)
        law1_description = Text("An object at rest stays at rest...", font_size=18)

        law1_group = VGroup(law1_text, law1_description).arrange(DOWN).shift(UP*2.5)

        self.play(Write(law1_text))
        self.play(Write(law1_description))
        self.wait(1)

        ball = Circle(radius=0.5, color=BLUE, fill_opacity=1).shift(LEFT * 3)
        self.play(Create(ball))
        self.wait(1)

        arrow = Arrow(ball.get_right(), ball.get_right() + RIGHT * 2, color=RED)
        force_text = Text("Force", font_size=18).next_to(arrow, UP)

        self.play(Create(arrow), Write(force_text))
        self.play(ball.animate.shift(RIGHT*2))
        self.wait(1)

        self.play(FadeOut(ball), FadeOut(arrow), FadeOut(force_text), FadeOut(law1_group))

        law2_text = Text("Newton's Second Law", font_size=24)
        law2_description = Text("F = ma", font_size=18)

        law2_group = VGroup(law2_text, law2_description).arrange(DOWN).shift(UP*2.5)
        self.play(Write(law2_text))
        self.play(Write(law2_description))
        self.wait(1)

        box = Rectangle(width=1, height=1, color=GREEN, fill_opacity=0.5).shift(LEFT * 3)
        mass_text = Text("m", font_size=20).move_to(box.get_center())
        box_group = Group(box, mass_text)

        self.play(Create(box), Write(mass_text))
        self.wait(0.5)
        arrow = Arrow(box.get_right(), box.get_right() + RIGHT * 2, color=RED)
        force_text = Text("F", font_size=20).next_to(arrow, UP)

        self.play(Create(arrow), Write(force_text))
        self.play(box_group.animate.shift(RIGHT*2))
        self.wait(1)

        acceleration_arrow = Arrow(box.get_right(), box.get_right() + RIGHT*2, color=YELLOW)
        acceleration_text = Text("a", font_size=20).next_to(acceleration_arrow, UP)
        self.play(Create(acceleration_arrow), Write(acceleration_text))
        self.wait(1)

        self.play(FadeOut(box_group), FadeOut(arrow), FadeOut(force_text), FadeOut(acceleration_arrow), FadeOut(acceleration_text), FadeOut(law2_group))

        law3_text = Text("Newton's Third Law", font_size=24)
        law3_description = Text("Action and reaction are equal and opposite", font_size=18)

        law3_group = VGroup(law3_text, law3_description).arrange(DOWN).shift(UP*2.5)

        self.play(Write(law3_text))
        self.play(Write(law3_description))
        self.wait(1)

        box1 = Square(side_length=1, color=PURPLE, fill_opacity=0.5).shift(LEFT * 2)
        box2 = Square(side_length=1, color=ORANGE, fill_opacity=0.5).shift(RIGHT * 2)

        arrow1 = Arrow(box1.get_right(), box1.get_right() + RIGHT, color=RED)
        arrow2 = Arrow(box2.get_left(), box2.get_left() + LEFT, color=BLUE)

        force1_text = Text("Action", font_size=16).next_to(arrow1, UP)
        force2_text = Text("Reaction", font_size=16).next_to(arrow2, UP)
        
        self.play(Create(box1), Create(box2))
        self.wait(0.5)

        self.play(Create(arrow1), Create(arrow2), Write(force1_text), Write(force2_text))
        self.wait(1)

        self.play(FadeOut(box1), FadeOut(box2), FadeOut(arrow1), FadeOut(arrow2), FadeOut(force1_text), FadeOut(force2_text), FadeOut(law3_group))

        end_text = Text("The End", font_size=36)
        self.play(Write(end_text))
        self.wait(2)