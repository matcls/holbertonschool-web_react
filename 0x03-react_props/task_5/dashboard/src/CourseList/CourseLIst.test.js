import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

  describe("CourseList with list of courses", () => {
    beforeEach(() => {
      let listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
    });
  });

  describe("CourseList without listCourses or empty listCourses", () => {
    beforeEach(() => {
      let listCourses = [];
    });

    it("it renders the 3 rows without listCourses  without listCourses", () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.exists());
      wrapper.update();
      const item = wrapper.find("CourseListRow");

      expect(item).toHaveLength(3);
      expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
      expect(item.at(0).prop("isHeader")).toEqual(true);

      expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
      expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
      expect(item.at(1).prop("isHeader")).toEqual(true);

      expect(item.at(2).prop("textFirstCell")).toEqual(
        "No course available yet"
      );
      expect(item.at(2).prop("textSecondCell")).toEqual(null);
      expect(item.at(2).prop("isHeader")).toEqual(false);
    });

  });
});