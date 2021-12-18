import React from 'react'
import { Form, FormControl } from "react-bootstrap"; 

const SearchBox = () => {
    return (
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    )
}
export default SearchBox