import React from 'react'

const BilgiList = ({tutorials}) => {

    console.log(tutorials);
    
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({id,title,description}) => {
            return (
              <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center ">
                  {/* <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                  /> */}

                  {/* <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"
                   
                  /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     
    </div>
  );
}

export default BilgiList