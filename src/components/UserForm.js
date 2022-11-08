import React, { useState } from "react";
import  { useUseContext } from "../context/UserProvider";
import Swal from "sweetalert2";
import "animate.css";

const UserForm = () => {
  const [user, setuser] = useState({});
  const { ProviderUser } = useUseContext();
  function updateUser(event) {
    setuser((user) => ({ ...user, [event.target.name]: event.target.value }));
    console.log(user);
  }

  function AddDateUser() {
    ProviderUser(user);
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: `Tu usuario fue creado con éxito`,
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    console.log(user);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Crea tu usuario ahora!</h1>
          <p className="py-6">
            Para crear tu usuario necesitas completar los datos solcitados.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={updateUser}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={updateUser}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                onChange={updateUser}
                name="phone"
                type="text"
                placeholder="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                onChange={updateUser}
                name="address"
                type="text"
                placeholder="address"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button onClick={AddDateUser} className="btn btn-primary">
                Crear Usuario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
