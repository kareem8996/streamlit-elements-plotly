from streamlit_elements.modules.callbacks import sync, lazy, partial
from streamlit_elements.modules.dashboard import Dashboard
from streamlit_elements.modules.editors import Editors
from streamlit_elements.modules.events import Events
from streamlit_elements.modules.html import HTML
from streamlit_elements.modules.media import Media
from streamlit_elements.modules.mui import MUI
from streamlit_elements.modules.plotly import Plotly

__all__ = [
    "dashboard",
    "editor",
    "event",
    "html",
    "lazy",
    "media",
    "mui",
    "plotly",
    "partial",
    "sync",
]


dashboard = Dashboard()
editor = Editors()
event = Events()
html = HTML()
media = Media()
mui = MUI()
nivo = Plotly()
