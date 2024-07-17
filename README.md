# React + TypeScript + Vite

### Running the application

## Requirements

This application was tested on node `18.18.0`. If you are using anything less than that, please concider upgrading to something `>=18.18.0`. You can use `nvm`.

## Running and installing dependencies
_Assumption - you are using npm._

To install dependencies, run

```$ npm i```

To run the app, use

```$ npm run dev```

Then follow the instruction on the console.



## Screenshots

Dashboard as per the requirements

<img width="600" alt="image" src="https://github.com/user-attachments/assets/76172b3c-ba6f-4aa5-882c-eaa283cccec7">

Histogram as per the requirements.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/c2213b8a-67e3-4bd9-8219-1d7bd546bbf1">


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
  // Missing fields here
}
```

Ideally as a full stack engineer I should investigate this and fix the issue. 

My overall comment is a room to improve the api, especially concidering that it has a rate limit.


## Happy days!!!


