from manim import *

class RabbitMQExplanation(Scene):
    def construct(self):
        # Introduction
        title = Text("RabbitMQ: A Message Broker").scale(0.8)
        self.play(Write(title), run_time=2)
        self.wait(1)
        self.play(FadeOut(title))

        # Components
        producer = Square(side_length=2, color=BLUE).shift(LEFT * 4)
        consumer = Square(side_length=2, color=GREEN).shift(RIGHT * 4)
        queue = Rectangle(width=3, height=2, color=YELLOW)
        exchange = Circle(radius=1, color=RED).shift(UP * 2.5)

        producer_text = Text("Producer").scale(0.5).move_to(producer.get_center())
        consumer_text = Text("Consumer").scale(0.5).move_to(consumer.get_center())
        queue_text = Text("Queue").scale(0.5).move_to(queue.get_center())
        exchange_text = Text("Exchange").scale(0.5).move_to(exchange.get_center())

        self.play(Create(producer), Create(consumer), Create(queue), Create(exchange))
        self.play(Write(producer_text), Write(consumer_text), Write(queue_text), Write(exchange_text))
        self.wait(1)

        # Arrows
        producer_to_exchange = Arrow(producer.get_right(), exchange.get_bottom(), buff=0.3)
        exchange_to_queue = Arrow(exchange.get_bottom(), queue.get_top(), buff=0.3)
        queue_to_consumer = Arrow(queue.get_right(), consumer.get_left(), buff=0.3)

        self.play(Create(producer_to_exchange), Create(exchange_to_queue), Create(queue_to_consumer))
        self.wait(1)

        # Messages
        message1 = Text("Message 1", color=WHITE).scale(0.4).move_to(producer.get_center()).shift(RIGHT*0.5)
        self.play(Write(message1))
        self.play(message1.animate.move_to(exchange.get_center()))
        self.play(message1.animate.move_to(queue.get_center()))
        self.play(message1.animate.move_to(consumer.get_center()))

        message2 = Text("Message 2", color=WHITE).scale(0.4).move_to(producer.get_center()).shift(RIGHT*0.5)
        self.play(Write(message2))
        self.play(message2.animate.move_to(exchange.get_center()))
        self.play(message2.animate.move_to(queue.get_center()))
        self.play(message2.animate.move_to(consumer.get_center()))
        self.wait(1)

        # Functionality Explanation
        functionality_text1 = Text("1. Producer sends message to Exchange").scale(0.4).to_edge(DOWN+LEFT)
        functionality_text2 = Text("2. Exchange routes message to Queue").scale(0.4).next_to(functionality_text1, DOWN, aligned_edge=LEFT)
        functionality_text3 = Text("3. Consumer receives message from Queue").scale(0.4).next_to(functionality_text2, DOWN, aligned_edge=LEFT)

        self.play(Write(functionality_text1))
        self.wait(0.5)
        self.play(Write(functionality_text2))
        self.wait(0.5)
        self.play(Write(functionality_text3))
        self.wait(1)

        # Clean up
        self.play(FadeOut(producer, consumer, queue, exchange, producer_text, consumer_text, queue_text, exchange_text, producer_to_exchange, exchange_to_queue, queue_to_consumer, message1, message2, functionality_text1, functionality_text2, functionality_text3))
        self.wait(1)

        # Summary
        summary_text = Text("RabbitMQ facilitates asynchronous communication").scale(0.6)
        self.play(Write(summary_text))
        self.wait(2)