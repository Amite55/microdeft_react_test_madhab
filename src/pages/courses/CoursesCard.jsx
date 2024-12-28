

import PropTypes from 'prop-types';

const CoursesCard = ({course}) => {
    const dataColor = course.badge_color;
    const color = dataColor.substring(0, dataColor.indexOf(" "));
    console.log(color);
    return (
        <div className={`card__content`}
        style={{
            borderBottom: `4px solid ${color}`,
        }}

        >
            <span
            style={{
                backgroundColor: `${color}`,
            }}
            >
                {course?.badge_text}
            </span>
            <h2>{course?.title}</h2>
            <p>
                {course?.description}
            </p>
            <h5 >Instructor: {course?.instructor_name}</h5>
        </div>
    );
};

export default CoursesCard;


CoursesCard.propTypes = {
    course: PropTypes.object
  };