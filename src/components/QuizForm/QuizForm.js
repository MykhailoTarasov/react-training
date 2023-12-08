import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './QuizForm.Styled';

const QuizSchema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too Short!').required('This field is required'),
  time: Yup.number()
    .min(10, 'Min 10 minutes')
    .max(45, 'Max 45 minutes')
    .required('This field is required'),
  questions: Yup.number()
    .min(10, 'Min 10 minutes')
    .required('This field is required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('This field is required!'),
});

const QuizForm = ({onAdd}) => {
  return (
    <div>
      <Formik
        initialValues={{
          topic: '',
          time: 0,
          questions: 0,
          level: 'beginner',
        }}
        validationSchema={QuizSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Topic
            <Field name="topic" placeholder="Quiz topic" />
            <ErrorMessage name="topic"/>
          </label>

          <label>
            Time
            <Field type="number" name="time" />
            <ErrorMessage name="time"/>
          </label>

          <label>
            Questions
            <Field type="number" name="questions" />
            <ErrorMessage name="questions"/>
          </label>

          <label>
            Level
            <Field as="select" name="level">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Field>
            <ErrorMessage name="level"/>
          </label>

          <button type="submit">Add quiz</button>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default QuizForm;
