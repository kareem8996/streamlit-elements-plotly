✨ Streamlit Elements with Plotly &nbsp; [![GitHub][github_badge]][github_link] [![PyPI][pypi_badge]][pypi_link]
=====================
One day while working on my bachelor graduation project (called C.A.S.E you can find it in my Repos), I wanted to use the streamlit-elements to create a dashboard for my automated analysis functionality. However, I discovered that this library only supports Nivo charts. What a BUMMER! As a huge advocate for plotly, this was a huge inconvenience, but I am someone who doesn't take no for an answer. That is WHY this repository exists.

This is an extension on a library created by okld, The purpose of this extension is to add Plotly capabilities to the already amazing feautures provided. Previously, the charts were created by Nivo, which is a great React chart library, but compared to Plotly it lacks many plots and features.
This has been a much requested functionality so enjoy!

All below are the same as okld's Streamlit Elements except the Plotly part.

Demo
----

[![Open in Streamlit][share_badge]][share_link]

[![Preview][share_video]][share_link]

To create something like this go to: [share_link]

Go to source repository and change Nivo with Plotly as shown below in section 5.2

[share_badge]: https://static.streamlit.io/badges/streamlit_badge_black_white.svg
[share_link]: https://share.streamlit.io/okld/streamlit-gallery/main?p=elements
[share_video]: https://github.com/okld/streamlit-elements/raw/main/demo.gif

[github_badge]: https://badgen.net/badge/icon/GitHub?icon=github&color=black&label
[github_link]: https://github.com/okld/streamlit-elements

[pypi_badge]: https://badgen.net/pypi/v/streamlit-elements?icon=pypi&color=black&label
[pypi_link]: https://pypi.org/project/streamlit-elements


Getting started
---------------

### 1. Introduction

Streamlit Elements is a component that gives you the tools to compose beautiful applications with Material UI widgets, Monaco, Nivo charts, and more.
It also includes a feature to create draggable and resizable dashboards.

#### Installation

```sh
pip install git+https://github.com/kareem8996/streamlit-elements-plotly
```

#### Available elements and objects

Here is a list of elements and objects you can import in your app:

Element   | Description
:--------:|:-----------
elements  | Create a frame where elements will be displayed.
dashboard | Build a draggable and resizable dashboard.
mui       | Material UI (MUI) widgets and icons.
html      | HTML objects.
editor    | Monaco code and diff editor that powers Visual Studio Code.
plotly      | plotly chart library.
media     | Media player.
sync      | Callback to synchronize Streamlit's session state with elements events data.
lazy      | Defer a callback call until another non-lazy callback is called.

#### Caution

- A few Material UI widgets may not work as expected (ie. modal dialogs and snackbars).
- Using many element frames can significantly impact your app's performance. Try to gather elements in few frames at most.

---

### 2. Display elements

#### 2.1. Create an element with a child

```python
# First, import the elements you need

from streamlit_elements import elements, mui, html

# Create a frame where Elements widgets will be displayed.
#
# Elements widgets will not render outside of this frame.
# Native Streamlit widgets will not render inside this frame.
#
# elements() takes a key as parameter.
# This key can't be reused by another frame or Streamlit widget.

with elements("new_element"):

    # Let's create a Typography element with "Hello world" as children.
    # The first step is to check Typography's documentation on MUI:
    # https://mui.com/components/typography/
    #
    # Here is how you would write it in React JSX:
    #
    # <Typography>
    #   Hello world
    # </Typography>

    mui.Typography("Hello world")
```
- MUI Typography: https://mui.com/components/typography/

---

#### 2.2. Create an element with multiple children

```python
with elements("multiple_children"):

    # You have access to Material UI icons using: mui.icon.IconNameHere
    #
    # Multiple children can be added in a single element.
    #
    # <Button>
    #   <EmojiPeople />
    #   <DoubleArrow />
    #   Hello world
    # </Button>

    mui.Button(
        mui.icon.EmojiPeople,
        mui.icon.DoubleArrow,
        "Button with multiple children"
    )

    # You can also add children to an element using a 'with' statement.
    #
    # <Button>
    #   <EmojiPeople />
    #   <DoubleArrow />
    #   <Typography>
    #     Hello world
    #   </Typography>
    # </Button>

    with mui.Button:
        mui.icon.EmojiPeople()
        mui.icon.DoubleArrow()
        mui.Typography("Button with multiple children")
```
- MUI button: https://mui.com/components/buttons/
- MUI icons: https://mui.com/components/material-icons/

---

#### 2.3. Create an element with nested children

```python
with elements("nested_children"):

    # You can nest children using multiple 'with' statements.
    #
    # <Paper>
    #   <Typography>
    #     <p>Hello world</p>
    #     <p>Goodbye world</p>
    #   </Typography>
    # </Paper>

    with mui.Paper:
        with mui.Typography:
            html.p("Hello world")
            html.p("Goodbye world")
```
- MUI paper: https://mui.com/components/paper/

---

#### 2.4. Add properties to an element

```python
with elements("properties"):

    # You can add properties to elements with named parameters.
    #
    # To find all available parameters for a given element, you can
    # refer to its related documentation on mui.com for MUI widgets,
    # on https://microsoft.github.io/monaco-editor/ for Monaco editor,
    # and so on.
    #
    # <Paper elevation={3} variant="outlined" square>
    #   <TextField label="My text input" defaultValue="Type here" variant="outlined" />
    # </Paper>

    with mui.Paper(elevation=3, variant="outlined", square=True):
        mui.TextField(
            label="My text input",
            defaultValue="Type here",
            variant="outlined",
        )

    # If you must pass a parameter which is also a Python keyword, you can append an
    # underscore to avoid a syntax error.
    #
    # <Collapse in />

    mui.Collapse(in_=True)

    # mui.collapse(in=True)
    # > Syntax error: 'in' is a Python keyword:
```
- MUI text field: https://mui.com/components/text-fields/

---

#### 2.5. Apply custom CSS styles

##### 2.5.1. Material UI elements

```python
with elements("style_mui_sx"):

    # For Material UI elements, use the 'sx' property.
    #
    # <Box
    #   sx={{
    #     bgcolor: 'background.paper',
    #     boxShadow: 1,
    #     borderRadius: 2,
    #     p: 2,
    #     minWidth: 300,
    #   }}
    # >
    #   Some text in a styled box
    # </Box>

    mui.Box(
        "Some text in a styled box",
        sx={
            "bgcolor": "background.paper",
            "boxShadow": 1,
            "borderRadius": 2,
            "p": 2,
            "minWidth": 300,
        }
    )
```
- MUI's **sx** property: https://mui.com/system/the-sx-prop/

##### 2.5.2. Other elements

```python
with elements("style_elements_css"):

    # For any other element, use the 'css' property.
    #
    # <div
    #   css={{
    #     backgroundColor: 'hotpink',
    #     '&:hover': {
    #         color: 'lightgreen'
    #     }
    #   }}
    # >
    #   This has a hotpink background
    # </div>

    html.div(
        "This has a hotpink background",
        css={
            "backgroundColor": "hotpink",
            "&:hover": {
                "color": "lightgreen"
            }
        }
    )
```
- Emotion's **css** property: https://emotion.sh/docs/css-prop#object-styles

---

### 3. Callbacks

#### 3.1. Retrieve an element's data

```python
import streamlit as st

with elements("callbacks_retrieve_data"):

    # Some element allows executing a callback on specific event.
    #
    # const [name, setName] = React.useState("")
    # const handleChange = (event) => {
    #   // You can see here that a text field value
    #   // is stored in event.target.value
    #   setName(event.target.value)
    # }
    #
    # <TextField
    #   label="Input some text here"
    #   onChange={handleChange}
    # />

    # Initialize a new item in session state called "my_text"
    if "my_text" not in st.session_state:
        st.session_state.my_text = ""

    # When text field changes, this function will be called.
    # To know which parameters are passed to the callback,
    # you can refer to the element's documentation.
    def handle_change(event):
        st.session_state.my_text = event.target.value

    # Here we display what we have typed in our text field
    mui.Typography(st.session_state.my_text)

    # And here we give our 'handle_change' callback to the 'onChange'
    # property of the text field.
    mui.TextField(label="Input some text here", onChange=handle_change)
```
- MUI text field event: https://mui.com/components/text-fields/#uncontrolled-vs-controlled
- MUI text field API: https://mui.com/api/text-field/

---

#### 3.2. Synchronize a session state item with an element event using sync()

```python
with elements("callbacks_sync"):

    # If you just want to store callback parameters into Streamlit's session state
    # like above, you can also use the special function sync().
    #
    # When an onChange event occurs, the callback is called with an event data object
    # as argument. In the example below, we are synchronizing that event data object with
    # the session state item 'my_event'.
    #
    # If an event passes more than one parameter, you can synchronize as many session state item
    # as needed like so:
    # >>> sync("my_first_param", "my_second_param")
    #
    # If you want to ignore the first parameter of an event but keep synchronizing the second,
    # pass None to sync:
    # >>> sync(None, "second_parameter_to_keep")

    from streamlit_elements import sync

    if "my_event" not in st.session_state:
        st.session_state.my_event = None

    if st.session_state.my_event is not None:
        text = st.session_state.my_event.target.value
    else:
        text = ""

    mui.Typography(text)
    mui.TextField(label="Input some text here", onChange=sync("my_event"))
```

---

#### 3.3. Avoid too many reloads with lazy()

```python
with elements("callbacks_lazy"):

    # With the two first examples, each time you input a letter into the text field,
    # the callback is invoked but the whole app is reloaded as well.
    #
    # To avoid reloading the whole app on every input, you can wrap your callback with
    # lazy(). This will defer the callback invocation until another non-lazy callback
    # is invoked. This can be useful to implement forms.

    from streamlit_elements import lazy

    if "first_name" not in st.session_state:
        st.session_state.first_name = None
        st.session_state.last_name = None

    if st.session_state.first_name is not None:
        first_name = st.session_state.first_name.target.value
    else:
        first_name = "John"

    if st.session_state.last_name is not None:
        last_name = st.session_state.last_name.target.value
    else:
        last_name = "Doe"

    def set_last_name(event):
        st.session_state.last_name = event

    # Display first name and last name
    mui.Typography("Your first name: ", first_name)
    mui.Typography("Your last name: ", last_name)

    # Lazily synchronize onChange with first_name and last_name state.
    # Inputting some text won't synchronize the value yet.
    mui.TextField(label="First name", onChange=lazy(sync("first_name")))

    # You can also pass regular python functions to lazy().
    mui.TextField(label="Last name", onChange=lazy(set_last_name))

    # Here we give a non-lazy callback to onClick using sync().
    # We are not interested in getting onClick event data object,
    # so we call sync() with no argument.
    #
    # You can use either sync() or a regular python function.
    # As long as the callback is not wrapped with lazy(), its invocation will
    # also trigger every other defered callbacks.
    mui.Button("Update first namd and last name", onClick=sync())
```

---

#### 3.4. Invoke a callback when a sequence is pressed using event.Hotkey()

```python
with elements("callbacks_hotkey"):

    # Invoke a callback when a specific hotkey sequence is pressed.
    #
    # For more information regarding sequences syntax and supported keys,
    # go to Mousetrap's project page linked below.
    #
    # /!\ Hotkeys work if you don't have focus on Streamlit Elements's frame /!\
    # /!\ As with other callbacks, this reruns the whole app /!\

    from streamlit_elements import event

    def hotkey_pressed():
        print("Hotkey pressed")

    event.Hotkey("g", hotkey_pressed)

    # If you want your hotkey to work even in text fields, set bind_inputs to True.
    event.Hotkey("h", hotkey_pressed, bindInputs=True)
    mui.TextField(label="Try pressing 'h' while typing some text here.")

    # If you want to override default hotkeys (ie. ctrl+f to search in page),
    # set overrideDefault to True.
    event.Hotkey("ctrl+f", hotkey_pressed, overrideDefault=True)
```
- Mousetrap: https://craig.is/killing/mice
- Github page: https://github.com/ccampbell/mousetrap

---

#### 3.5. Invoke a callback periodically using event.Interval()

```python
with elements("callbacks_interval"):

    # Invoke a callback every n seconds.
    #
    # /!\ As with other callbacks, this reruns the whole app /!\

    def call_every_second():
        print("Hello world")

    event.Interval(1, call_every_second)
```

---

### 4. Draggable and resizable dashboard

```python
with elements("dashboard"):

    # You can create a draggable and resizable dashboard using
    # any element available in Streamlit Elements.

    from streamlit_elements import dashboard

    # First, build a default layout for every element you want to include in your dashboard

    layout = [
        # Parameters: element_identifier, x_pos, y_pos, width, height, [item properties...]
        dashboard.Item("first_item", 0, 0, 2, 2),
        dashboard.Item("second_item", 2, 0, 2, 2, isDraggable=False, moved=False),
        dashboard.Item("third_item", 0, 2, 1, 1, isResizable=False),
    ]

    # Next, create a dashboard layout using the 'with' syntax. It takes the layout
    # as first parameter, plus additional properties you can find in the GitHub links below.

    with dashboard.Grid(layout):
        mui.Paper("First item", key="first_item")
        mui.Paper("Second item (cannot drag)", key="second_item")
        mui.Paper("Third item (cannot resize)", key="third_item")

    # If you want to retrieve updated layout values as the user move or resize dashboard items,
    # you can pass a callback to the onLayoutChange event parameter.

    def handle_layout_change(updated_layout):
        # You can save the layout in a file, or do anything you want with it.
        # You can pass it back to dashboard.Grid() if you want to restore a saved layout.
        print(updated_layout)

    with dashboard.Grid(layout, onLayoutChange=handle_layout_change):
        mui.Paper("First item", key="first_item")
        mui.Paper("Second item (cannot drag)", key="second_item")
        mui.Paper("Third item (cannot resize)", key="third_item")
```
- Dashboard item properties: https://github.com/react-grid-layout/react-grid-layout#grid-item-props
- Dashboard grid properties (Streamlit Elements uses the Responsive grid layout):
  - https://github.com/react-grid-layout/react-grid-layout#grid-layout-props
  - https://github.com/react-grid-layout/react-grid-layout#responsive-grid-layout-props

---

### 5. Other third-party elements

#### 5.1. Monaco code and diff editor

```python
with elements("monaco_editors"):

    # Streamlit Elements embeds Monaco code and diff editor that powers Visual Studio Code.
    # You can configure editor's behavior and features with the 'options' parameter.
    #
    # Streamlit Elements uses an unofficial React implementation (GitHub links below for
    # documentation).

    from streamlit_elements import editor

    if "content" not in st.session_state:
        st.session_state.content = "Default value"

    mui.Typography("Content: ", st.session_state.content)

    def update_content(value):
        st.session_state.content = value

    editor.Monaco(
        height=300,
        defaultValue=st.session_state.content,
        onChange=lazy(update_content)
    )

    mui.Button("Update content", onClick=sync())

    editor.MonacoDiff(
        original="Happy Streamlit-ing!",
        modified="Happy Streamlit-in' with Elements!",
        height=300,
    )
```
- Monaco examples and properties: https://github.com/suren-atoyan/monaco-react
- Code editor options: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html
- Diff editor options: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneDiffEditorConstructionOptions.html
- Monaco project page: https://microsoft.github.io/monaco-editor/

---

#### 5.2. Plotly charts
I have made it very easy to use the plotly, you can create whatever plot you want using plotly.express ONLY, someone can expand this and try to use plotly graph objects.
Simply all you need to do is after creating the plotly figure (fig), pass to plotly.Plot(data=fig.data,layout=fig.layout)
Additionally you can pass config to Plot too!
```python
from streamlit_elements import plotly
    def make_serializable(obj):
        # Function that transforms numpy types to normal python types due to JSON not accepting numpy types . You can copy and paste this function
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        elif isinstance(obj, dict):
            return {key: make_serializable(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [make_serializable(item) for item in obj]
        else:
            return obj

def dynamic_color_map(df, column_name):
        unique_values = df[column_name].unique()
        colors = px.colors.qualitative.Set1  # You can choose any color palette
        color_map = {value: colors[i % len(colors)] for i, value in enumerate(unique_values)}
        return color_map
 data = {
                'Fruit': ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Apple', 'Banana', 'Orange', 'Mango'],
                'Sweetness': [7, 9, 6, 8, 10, 6, 8, 7, 9],
            }
df = pd.DataFrame(data)

# If you are facing issues with colors try to use a defined colormap like this
color_map = dynamic_color_map(df, 'Fruit')

    fig = px.scatter(df, x='Fruit', y='Sweetness', color='Fruit', title="Sweetness of Different Fruits", color_discrete_map=color_map)

    fig.update_layout(
                title='Wine Tastes Comparison',
                xaxis={'title': 'Taste'},
                yaxis={'title': 'Wine Intensity'},
                showlegend=True
            )
    fig_dict = fig.to_dict()
    fig_dict['data'] = make_serializable(fig_dict['data']) # Read function description on why we use this
    fig_dict['layout'] = make_serializable(fig_dict['layout']) # Read function description on why we use this

with elements("plotly_charts"):
    with mui.Box(sx={"height": 500}):
        plotly.Plot(data=fig_dict['data'], layout=fig_dict['layout'],
                                        config={
                                        'displayModeBar': True,
                                        'scrollZoom': True,
                                        'displaylogo': True,
                                        'editable': True,
                                        'showLink': False,
                                        'modeBarButtonsToRemove': ['zoom', 'resetScale'],
                                        'responsive': True,
                                    },) # Config parameters are optioinal but responsive=True is advised
```

---

#### 5.3. Media player

```python
with elements("media_player"):

    # Play video from many third-party sources: YouTube, Facebook, Twitch,
    # SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.
    #
    # This element is powered by ReactPlayer (GitHub link below).

    from streamlit_elements import media

    media.Player(url="https://www.youtube.com/watch?v=iik25wqIuFo", controls=True)
```
- ReactPlayer properties: https://github.com/cookpete/react-player#props
