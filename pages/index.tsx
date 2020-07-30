import React from "react";
import { Formik, Form, Field } from "formik";
import { PrismaClient } from "@prisma/client";

const Index = ({ movies }) => {
  return (
    <div>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <p>Name: {movie.movieName}</p>
          <p>Director: {movie.director}</p>
          <p>Year Released: {movie.yearRelesead}</p>
        </div>
      ))}
      <Formik
        initialValues={{
          director: "",
          movieName: "",
          yearRelesead: "",
        }}
        onSubmit={(values) => {
          fetch("http://localhost:3000/api/movies", {
            method: "POST",
            body: JSON.stringify({
              ...values,
              yearRelesead: Number(values.yearRelesead),
            }),
          });
        }}
      >
        <Form>
          <label>
            Movie name
            <Field name="movieName" type="text"></Field>
          </label>
          <label>
            Director
            <Field name="director" type="text"></Field>
          </label>
          <label>
            Year Released
            <Field name="yearRelesead" type="text"></Field>
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const movies = await prisma.movie.findMany();
  return { props: { movies } };
};

export default Index;
