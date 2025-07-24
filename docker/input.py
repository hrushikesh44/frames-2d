from manim import *

class GraphSineWave(Scene):
    def construct(self):
        axes = Axes(
            x_range=[-PI, PI, PI / 2],
            y_range=[-1.5, 1.5, 0.5],
            x_length=6,
            y_length=3,
            axis_config={"color": BLUE},
        )
        axes.add_coordinate_labels()

        graph = axes.plot(
            lambda x: np.sin(x),
            x_range=[-PI, PI],
            color=GREEN,
            stroke_width=3
        )

        label = axes.get_graph_label(
            graph,
            "\\sin(x)",
            x_val=PI,
            direction=UR
        )

        self.play(Create(axes), Write(label))
        self.play(Create(graph, run_time=3))
        self.wait(1)