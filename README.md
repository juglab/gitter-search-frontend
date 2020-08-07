Gitter search UI for gitter search backed by an [Elastic App Search](https://www.elastic.co/products/app-search) Engine.

Requires [npm](https://www.npmjs.com/).

The code was initially generated from within the App Search dashboard.

Run the following commands to start this application:

```bash
# Run this to set everything up
npm install

# Run this to start your application and open it up in a new browser window
npm start
```

## Usage

### Updating configuration

The project can be configured via a JSON [config file](src/config/engine.json).

You can easily control things like...

- The Engine the UI runs against
- Which fields are displayed
- The filters that are used

If you would like to make configuration changes, there is no need to regenerate
this app from your App Search Dashboard!

You can simply open up the
[engine.json](src/config/engine.json) file, update the [options](#config),
and then restart this app.

### Configuration options <a id="config"></a>

The following is a complete list of options available for configuration in [engine.json](src/config/engine.json).

| option               | value type    | required/optional | source                                                                                                                                                                                 |
| -------------------- | ------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `engineName`         | String        | required          | Found in your [App Search Dashboard](http://app.swiftype.com/as).                                                                                                                      |
| `endpointBase`       | String        | optional          | Use this instead of "hostIdentifier" if you are using self managed. ex: "http://127.0.0.1:3002"                                                                                        |
| `hostIdentifier`     | String        | required          | Found in your [App Search Dashboard](http://app.swiftype.com/as).                                                                                                                      |
| `searchKey`          | String        | required          | Found in your [App Search Dashboard](http://app.swiftype.com/as).                                                                                                                      |
| `searchFields`       | Array[String] | required          | A list of fields that will be searched with your search term.                                                                                                                          |
| `resultFields`       | Array[String] | required          | A list of fields that will be displayed within your results.                                                                                                                           |
| `querySuggestFields` | Array[String] | optional          | A list of fields that will be searched and displayed as query suggestions.                                                                                                             |
| `titleField`         | String        | optional          | The field to display as the title in results.                                                                                                                                          |
| `urlField`           | String        | optional          | A field with a url to use as a link in results.                                                                                                                                        |
| `sortFields`         | Array[String] | optional          | A list of fields that will be used for sort options.                                                                                                                                   |
| `facets`             | Array[String] | optional          | A list of fields that will be available as "facet" filters. Read more about facets within the [App Search documentation](https://swiftype.com/documentation/app-search/guides/facets). |

## Deploy and Serve

To deploy:

```
npm build
npm install -g serve
serve -s build -l 3000 
```

## Customization

This project is built with [Search UI](https://github.com/elastic/search-ui), which is a React library for building search experiences. To expand onto this prototype see the Search UI documentation.
