# gridsome-debug

Debug repository for Gridsome issue [650](https://github.com/gridsome/gridsome/issues/650#issuecomment-840791003):

- `gridsome build`
- Open page at `http://localhost:5000/pagea` (PAGE-A)
- Click on `HOME`
- Route will not load properly; hinting at hydration error
- Refresh page
- HOME is now loaded properly
- Basically, the error appears whenever you attempt to follow an invalid route
