# HTML

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="static/css/style.css">
</head>

<body>
    <!-- container is parent to content so you understand container is grandpar to card -->
    <div class="container">
        <!-- pcontent is parent to card -->
        <div class="content">
            <!-- next create card -->
            <div class="card"></div>
            <div class="card"></div>
        </div><!-- End of content-->

        <div class="header">
            <div class="header-card"></div>
            <div class="header-card"></div>
        </div>
    </div>
</body>

</html>

```

1. HTML Structure:
   - The HTML structure consists of a `div` with a class of "container" as the parent element.
   - Inside the container, there is a `div` with a class of "content" that contains two child elements, which are `div` elements with a class of "card". This creates two cards side by side within the content section.
   - After the content section, there is another `div` with a class of "header" that contains two child elements, which are `div` elements with a class of "header-card". This creates two header cards side by side within the header section.

3. CSS Link:
   - The HTML file includes a link to an external CSS file using the `<link>` tag. The CSS file is located at "static/css/style.css" relative to the HTML file.

# CSS

```
.container{
    width: 100%;
    height: 100vh;
    background: rgb(18, 18, 66);
}

.content {
    width: 100%;
    border: 3px solid white;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

.card{
    width: 300px;
    height: 300px;
    background: white;
}

/* what the defrent btn .content and header? */

.header{
    padding: 30px 10%;
    width: 100%;
    height: 40vh;
    border: 3px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
}

.header-card{
    width: 300px;
    height: 300px;
    background: red;
}

```
2. CSS Styling:
   - `.container` sets the width to 100%, height to 100vh (viewport height), and gives it a dark blue background.
   - `.content` sets the width to 100%, creates a white border with a thickness of 3 pixels, sets the height to 40vh (40% of viewport height), and aligns its contents vertically and horizontally. It also adds a margin-bottom of 20 pixels.
   - `.card` sets the width and height to 300 pixels and gives it a white background.
   - `.header` sets the padding to 30 pixels vertically and 10% horizontally, sets the width to 100%, creates a red border with a thickness of 3 pixels, and uses CSS grid to create a responsive layout with columns that automatically adjust based on the available space. The columns have a minimum width of 250 pixels and take up an equal amount of space. The gap between columns is set to 10 pixels.
   - `.header-card` sets the width and height to 300 pixels and gives it a red background.