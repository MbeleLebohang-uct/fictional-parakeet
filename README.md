# React + TypeScript + Vite

Me learning ReactJS.

## Notes - Things to improve
Multiple API calls are made to fetch Tree Surveys. This is inefficient and it can be improved by making the API allow a more comprehensinve selection and filtering. This can improve the performance since these calls will be reduced by implementing appropriate SQL queries. Example

```GET /farming/farms/?include=orchards,surveys```

One of the requirement is to display `Total trees surveyed`. Looking at the API, it was not clear how to get that information. Assumptions were made - I assumed that `Total trees surveyed` refers to `Total tree surveys`.

The other thing I noticed was that some data was missing on some orchards, while some tree surveys had missing fields. i.e 

```
{
  "id": 54733427,
  "lat": -32.3283234,
  "lng": 18
}
```

Ideally as a full stack engineer I should investigate this and fix the issue. 

My overall comment is a room to improve the api, especially concidering that it has a rate limit.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
