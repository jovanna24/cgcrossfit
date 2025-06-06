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
        <section className='schedule-section'>
            <div className='schedule-content'>
                <h1 className='schedule-title'>Weekly Schedule</h1>
                {weeklySchedule.map((daySchedule, index) => (
                    <div key={index}>
                        <h2 className='day-title'>{daySchedule.day}</h2>
                        <ul className='class-list'>
                            {daySchedule.classes.map((className, idx) => (
                                <li key={idx}>{className}</li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Schedule;