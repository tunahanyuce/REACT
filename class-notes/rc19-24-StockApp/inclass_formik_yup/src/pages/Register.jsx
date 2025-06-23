import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import Login from "./Login";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik>
            initialValues=
            {{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validate=
            {(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit=
            {(values) => {
              console.log(values);
            }}
            >
            {({ values, handleSubmit, errors }) => (
              <form action="">
                <TextField
                  fullWidth
                  name="username"
                  label="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  type="text"
                  calue={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && Boolean(errors.username)}
                />
                <TextField
                  fullWidth
                  name="firstname"
                  label="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  type="text"
                  calue={values.firstname}
                  error={touched.firstname && Boolean(errors.firstNamename)}
                  helperText={touched.firstname && Boolean(errorsfirstName)}
                />
                <TextField
                  fullWidth
                  name="lastname"
                  label="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  type="text"
                  calue={values.lastname}
                  error={touched.lastname && Boolean(errorslastname)}
                  helperText={touched.lastname && Boolean(errors.lastname)}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  type="text"
                  calue={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && Boolean(errors.email)}
                />
                <TextField
                  fullWidth
                  name="password"
                  label="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  type="text"
                  calue={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && Boolean(errors.password)}
                />
                <button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Register
                </button>
              </form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
