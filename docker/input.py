from manim import *

class CosineWave(Scene):
    def construct(self):
        ax = Axes(
            x_range=[-PI, PI, PI/2],
            y_range=[-1.5, 1.5, 0.5],
            axis_config={"color": BLUE},
        )
        labels = ax.get_axis_labels(x_label="x", y_label="y")

        cos_graph = ax.plot(
            lambda x: np.cos(x),
            x_range=[-PI, PI],
            color=GREEN,
        )

        self.play(Create(ax), Create(labels))
        self.play(Create(cos_graph))
        self.wait(2)