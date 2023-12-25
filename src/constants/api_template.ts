interface project {
    project_id: number,
    title: string,
    journeys: [
      {
        journey_id: number,
        title: string,
        organizer: string,
        place: string,
        written_date: string,
        image: string,
        dates: [
          {
            daterange_id: number,
            date_r: Date,
            journey: string
          }
        ],
        project: string
      }
    ]
  }

interface journey {
    journey_id: number,
    title: string,
    organizer: string,
    place: string,
    written_date: string,
    image: string,
    dates: [
      {
        daterange_id: number,
        date_r: Date,
        journey: string
      }
    ],
    project: {
      project_id: number,
      title: string,
      journeys: [
        string
      ]
    }
}

interface item {
    item_id: number,
    title: string,
    image: string
}

interface daterange {
    daterange_id: number,
    date_r: Date,
    journey: {
      journey_id: number,
      title: string,
      organizer: string,
      place: string,
      written_date: string,
      image: string,
      dates: [
        string
      ],
      project: {
        project_id: number,
        title: string,
        journeys: [
          string
        ]
      }
    }
  }

export {item, daterange, project, journey}