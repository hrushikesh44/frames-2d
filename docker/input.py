from manim import *

class WebSocketVisualization(Scene):
    def construct(self):
        server = Square(side_length=1.5, color=BLUE, fill_opacity=0.5).shift(LEFT * 3)
        client = Circle(radius=0.75, color=GREEN, fill_opacity=0.5).shift(RIGHT * 3)
        
        server_label = Tex("Server").next_to(server, DOWN)
        client_label = Tex("Client").next_to(client, DOWN)
        
        self.play(Create(server), Create(client), Write(server_label), Write(client_label))

        message_text = Tex("Data").scale(0.7)
        message = RoundedRectangle(corner_radius=0.2, width=1.0, height=0.5, color=YELLOW, fill_opacity=0.8)
        message.move_to(server.get_right() + LEFT*0.1 + RIGHT*1.5)
        
        arrow = Arrow(server.get_right(), client.get_left(), buff=0.5)
        message_text.move_to(arrow.get_center())

        self.play(Create(arrow), Create(message), Write(message_text))
        self.wait(1)
        self.play(
            message.animate.move_to(client.get_left() + RIGHT*0.1 + LEFT*1.5),
            message_text.animate.move_to(client.get_center() + LEFT*0.8)
        )

        self.wait(1)

        arrow_back = Arrow(client.get_left(), server.get_right(), buff=0.5)
        message_back = RoundedRectangle(corner_radius=0.2, width=1.0, height=0.5, color=YELLOW, fill_opacity=0.8)
        message_back.move_to(client.get_right() + LEFT*0.1 + RIGHT*1.5)
        message_text_back = Tex("Ack").scale(0.7)
        message_text_back.move_to(arrow_back.get_center())

        self.play(Create(arrow_back), Create(message_back), Write(message_text_back))
        self.wait(1)
        self.play(
             message_back.animate.move_to(server.get_left() + RIGHT*0.1 + LEFT*1.5),
            message_text_back.animate.move_to(server.get_center() + RIGHT * 0.8)
        )
        
        self.wait(1)