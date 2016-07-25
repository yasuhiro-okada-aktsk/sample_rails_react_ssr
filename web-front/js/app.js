import React from 'react';
import ReactDOM, {render} from 'react-dom';

import createRoot from './createRoot';

import CourseListPage from './containers/CourseListPage';
import Calendar from './containers/Calendar';

window.CourseListPage = createRoot(CourseListPage);
window.Calendar = createRoot(Calendar);
