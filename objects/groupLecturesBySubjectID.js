/* 
TASK 1: You have given a JSON object representing details about a course. Your task is to group the lectures based on their subject ID and return a transformed structure where each subject ID is mapped to:

1. Subject information – an array containing the subject name and teacher name
2. A list of all lectures that belong to that subject
3. The "subjects" object contains a mapping of subject_id to an array of [subject_name, teacher_name]. Each lecture in lecture_details contains a subject_id.

You are required to group all lectures under their corresponding subject_id, while also attaching the subject and teacher name for that ID.

The final result should be an array of arrays, where each element contains:
[
   [
       subject ID,
       [subject_name, teacher_name],
       [[lecture_deatils]]
   ]
]
*/

const input = {
   "course_id": 339,
   "course_name": "New Course",
   "course_info": "{\"about\": \"New course\", \"subjects\": {\"6dbb463923d943b9a9beec42a79cf417\": [\"Subject 2\", \"Teacher 2\"], \"640c2995de6c407fb72a41afb65ad6b0\": [\"Subject 1\", \"Teacher 1\"]}}",
   "image_1": "/static/media/wl_client/251995/live_class_course_images/780792d819f04279ba32762b56c851c3.png",
   "image_2": "/static/media/wl_client/251995/live_class_course_images/0788c4423a34464391e8588cdea08746.png",
   "lecture_details": [
     [
       7091,                                           // lecture_id
       "Lecture 1",                                    // lecture_name
       "2025-04-15 09:35:00+00",                       // lecture_date
       "640c2995de6c407fb72a41afb65ad6b0",             // subject id
       30                                              // lecture_duration
     ],
     [
       7092,
       "Lecture 2",
       "2025-04-15 08:36:00+00",
       "6dbb463923d943b9a9beec42a79cf417",
       23
     ],
     [
       7093,
       "Lecture 3",
       "2025-04-15 08:36:00+00",
       "6dbb463923d943b9a9beec42a79cf417",
       23
     ]
   ]
}

// Step 1: Parse course_info JSON string
const courseInfo = JSON.parse(input.course_info);
const subjects = courseInfo.subjects;

// Step 2: Initialize a map to group lectures by subject_id
const subjectLectureMap = {};

// Step 3: Group lectures under their subject_id
input.lecture_details.forEach(lecture => {
  const subjectId = lecture[3];

  if (!subjectLectureMap[subjectId]) {
    subjectLectureMap[subjectId] = [];
  }

  subjectLectureMap[subjectId].push(lecture);
});

// Step 4: Construct the final output
const result = Object.keys(subjectLectureMap).map(subjectId => {
  return [
    subjectId,
    subjects[subjectId],
    subjectLectureMap[subjectId]
  ];
});

console.log(result);