import React from 'react'
import { useParams } from 'react-router-dom'

interface PropsID{
    id: string
}

interface Props{
    changeDataUpdated(e: React.ChangeEvent<HTMLInputElement>): void
    putContactData(id: string): void
}

const Edit = ( { changeDataUpdated, putContactData }:Props) => {

    const { id } = useParams<PropsID>();

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">
          <form onSubmit={(e) => {
              e.preventDefault()
              putContactData(id)
          }}>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={changeDataUpdated}
              />
              <label className="form-label">Name</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="lastname"
                name="lastname"
                onChange={changeDataUpdated}
              />
              <label className="form-label">Lastname</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                name="phone_number"
                onChange={changeDataUpdated}
              />
              <label className="form-label">Phone number</label>
            </div>
            <div className="m-1 p-1 text-center">
              <input type="submit" value="Send Info" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit