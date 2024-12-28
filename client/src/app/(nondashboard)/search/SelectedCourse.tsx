import AccordionSections from "@/components/AccordionSections";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import React from "react";

const SelectedCourse = ({ course, handleEnrollNow }: SelectedCourseProps) => {
  return (
    <div className="selected-course">
      <div>
        <h3 className="selected-course__title">{course.title}</h3> {/* Course title */}
        <p className="selected-course__author">
          By {course.teacherName} |{" "}
          <span className="selected-course__enrollment-count"> {/* Number of enrollments */}
            {course?.enrollments?.length}
          </span>
        </p>
      </div>

      <div className="selected-course__content">
        <p className="selected-course__description">{course.description}</p> {/* Course description */}


        <div className="selected-course__sections">
          <h4 className="selected-course__sections-title">Course Content</h4>
          <AccordionSections sections={course.sections} />
        </div>

        <div className="selected-course__footer">
          <span className="selected-course__price"> {/* Display course price */}
            {formatPrice(course.price)}
          </span>
          <Button
          /* Trigger enrollment */
            onClick={() => handleEnrollNow(course.courseId)} 
            className="bg-primary-700 hover:bg-primary-600"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
