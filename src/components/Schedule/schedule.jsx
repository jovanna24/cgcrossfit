import './schedule.css';

const weeklySchedule = [
    {
        day: 'Monday',
        classes: ['Weightlifting 5:30 pm', 'CrossFit 6:00 pm'],
    },
    {
        day: 'Tuesday',
        classes: ['CrossFit 5:45 pm'],
    },
    {
        day: 'Wednesday',
        classes: ['Weightlifting 5:30 pm', 'CrossFit 6:00 pm'],
    },
    {
        day: 'Thursday',
        classes: ['CrossFit 5:45 pm'],
    },
    {
        day: 'Friday',
        classes: ['CrossFit 5:30 pm'],
    },
];

const Schedule = () => {
    return (
        <div className='schedule'>
            <div className='text'>
                <h1>Weekly Schedule</h1>
                {weeklySchedule.map((daySchedule, index) => (
                    <div key={index}>
                        <h2>{daySchedule.day}</h2>
                        <ul>
                            {daySchedule.classes.map((className, idx) => (
                                <li key={idx}>{className}</li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Schedule;