import people from './../assets/activity_find.png';
import job from './../assets/activity_job.png';
import social from './../assets/activity_social.png';
import enternship from './../assets/activity_training.png';

export const activity=[
    {
        id:1,
        title:'Arrange Job',
        desc:'Here find your dream job.',
        img:job,
        path:'/findJob'
    },
    {
        id:2,
        title:'Enternship',
        desc:'We help to get Enternship',
        img:enternship,
        path:'/connect'
    },
    {
        id:3,
        title:'Social Activity',
        desc:'We arrange social activities',
        img:social,
        path:'/gallery'
    },
    {
        id:4,
        title:'Find People',
        desc:'Professional person',
        img:people,
        path:'/findPeople'
    }
]