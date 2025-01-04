import { FaArrowRight } from "react-icons/fa";


const UpCommingEvent = () => {
    const marathons = [
        {
            title: '42K Full Marathon',
            registered: '3,700',
            total: '5,000',
            date: 'March 12, 2025',
            details: 'A full 42km race for experienced runners.',
            img: 'https://images.pexels.com/photos/3629/jogger-jogging-sport-marathon.jpg'
        },
        {
            title: '21K Half Marathon',
            registered: '2,400',
            total: '5,000',
            date: 'April 5, 2025',
            details: 'A half marathon for intermediate runners.',
            img: 'https://images.pexels.com/photos/19128857/pexels-photo-19128857/free-photo-of-people-running-in-marathon.jpeg'
        },
        {
            title: '5K Race Marathon',
            registered: '3,800',
            total: '5,000',
            date: 'May 20, 2025',
            details: 'A short race perfect for beginners.',
            img: 'https://st4.depositphotos.com/21607914/24187/i/450/depositphotos_241876032-stock-photo-chinese-participants-run-2014-beijing.jpg'
        },
        {
            title: '10K Charity Marathon',
            registered: '1,200',
            total: '5,000',
            date: 'June 10, 2025',
            details: 'A 10km race with funds for charity.',
            img: 'https://st2.depositphotos.com/1176591/11492/i/450/depositphotos_114926852-stock-photo-run-for-the-blind-2.jpg'
        },
        {
            title: 'Marathon for Beginners',
            registered: '1,800',
            total: '5,000',
            date: 'July 15, 2025',
            details: 'A friendly marathon for first-timers.',
            img: 'https://media.istockphoto.com/id/612398606/photo/marathon-running-race.jpg?s=612x612&w=0&k=20&c=eDt8l27OCqRpXNj0t_YGN2X3HUtMcQt3KngqfuVF22A='
        },
        {
            title: 'Ultra Marathon',
            registered: '4,200',
            total: '5,000',
            date: 'August 25, 2025',
            details: 'An ultra marathon for seasoned professionals.',
            img: 'https://static.vecteezy.com/system/resources/thumbnails/035/779/450/small_2x/ai-generated-athletes-running-istanbul-half-marathon-in-istanbul-a-group-of-men-runners-running-in-a-road-race-ai-generated-free-photo.jpg'
        },
    ];
    return (
        <section className="max-w-7xl mx-auto p-3 mb-16">
            <h2 className="text-white text-4xl font-semibold text-center mb-4">Upcoming Marathons</h2>
            <p className="text-center text-gray-300 mx-auto mb-10 sm:mx-20 md:mx-0">Shows upcoming marathon events with dates, details, and registration progress for each race.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                {marathons.map((event, index) => (
                    <div
                        key={index}
                        className=" transition hover:bg-gray-800 hover:border-gray-900 duration-700 border border-red-500 p-5 rounded-2xl overflow-hidden "
                    >
                        <img
                            src={event.img}
                            alt={event.title}
                            className="w-full lg:h-56 md:h-72 sm:h-96 object-cover rounded-xl"
                        />
                        <div className="py-6">
                            <h3 className="text-xl font-medium">{event.title}</h3>
                            <p className="text-sm text-gray-400 my-2">
                                {event.registered} of {event.total} Registered Runners
                            </p>
                            <p className="text-sm text-gray-200 mb-2">{event.date}</p>
                            <p className="text-sm text-gray-200">{event.details}</p>
                            <a
                                href="#"
                                className="flex items-center text-blue-500 hover:text-blue-700 mt-4"
                            >
                                <span>Learn More</span>
                                <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpCommingEvent;