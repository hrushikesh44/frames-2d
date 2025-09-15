from manim import *

class InternetExplanation(Scene):
    def construct(self):
        server_color = BLUE
        client_color = GREEN
        router_color = YELLOW
        line_color = WHITE

        server = Circle(radius=0.7, color=server_color, fill_opacity=1)
        server_text = Tex("Server", color=WHITE).scale(0.6)
        server_text.move_to(server.get_center())
        server_group = VGroup(server, server_text).move_to(LEFT * 4 + UP * 2)

        client = Square(side_length=1, color=client_color, fill_opacity=1)
        client_text = Tex("Client", color=WHITE).scale(0.6)
        client_text.move_to(client.get_center())
        client_group = VGroup(client, client_text).move_to(RIGHT * 4 + DOWN * 2)

        router1 = Triangle(color=router_color, fill_opacity=1)
        router1.scale(0.7)
        router1_text = Tex("Router 1", color=WHITE).scale(0.4)
        router1_text.move_to(router1.get_center())
        router1_group = VGroup(router1, router1_text).move_to(LEFT * 1 + UP * 0.5)

        router2 = Triangle(color=router_color, fill_opacity=1)
        router2.scale(0.7)
        router2_text = Tex("Router 2", color=WHITE).scale(0.4)
        router2_text.move_to(router2.get_center())
        router2_group = VGroup(router2, router2_text).move_to(RIGHT * 1 + DOWN * 0.5)

        line1 = Line(server_group.get_right(), router1_group.get_left(), color=line_color)
        line2 = Line(router1_group.get_right(), router2_group.get_left(), color=line_color)
        line3 = Line(router2_group.get_right(), client_group.get_left(), color=line_color)

        self.play(Create(server_group), Create(client_group), Create(router1_group), Create(router2_group))
        self.play(Create(line1), Create(line2), Create(line3))

        message_text = Tex("Data Packet", color=RED).scale(0.5)
        message = Square(side_length=0.3, color=RED, fill_opacity=1).move_to(server_group.get_right() + LEFT * 0.3)

        self.play(Create(message), Create(message_text.next_to(message, UP)))
        self.play(message.animate.move_to(router1_group.get_left() + RIGHT * 0.3), run_time=2)
        self.play(message.animate.move_to(router2_group.get_left() + RIGHT * 0.3), run_time=2)
        self.play(message.animate.move_to(client_group.get_left() + RIGHT * 0.3), run_time=2)

        self.wait(1)
        self.play(FadeOut(message, message_text))

        acknowledgement_text = Tex("Acknowledgement", color=YELLOW).scale(0.5)
        acknowledgement = Square(side_length=0.3, color=YELLOW, fill_opacity=1).move_to(client_group.get_left() + RIGHT * 0.3)

        self.play(Create(acknowledgement), Create(acknowledgement_text.next_to(acknowledgement, UP)))
        self.play(acknowledgement.animate.move_to(router2_group.get_right() + LEFT * 0.3), run_time=2)
        self.play(acknowledgement.animate.move_to(router1_group.get_right() + LEFT * 0.3), run_time=2)
        self.play(acknowledgement.animate.move_to(server_group.get_right() + LEFT * 0.3), run_time=2)

        self.wait(1)
        self.play(FadeOut(acknowledgement, acknowledgement_text))
        self.wait(2)