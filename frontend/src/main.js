import { getUsers, createUser, updateUser, deleteUser } from "./api/endpoints";

const app = document.querySelector("#app");

let editingId = null;

async function render() {
  const users = await getUsers();

  app.innerHTML = `
    <h2>Users</h2>

    <form id="create-form">
      <input id="name-input" placeholder="Enter name" required />
      <button type="submit">Add User</button>
    </form>

    <ul id="user-list">
      ${users.map((u) => `
        <li data-id="${u._id}">
          <span class="uname">${u.name}</span>
          <button class="edit-btn">Edit</button>
          <button class="del-btn">Delete</button>
        </li>
      `).join("")}
    </ul>
  `;

  document.querySelector("#create-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name-input").value.trim();
    if (!name) return;
    await createUser({ name });
    render();
  });

  document.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.closest("li").dataset.id;
      await deleteUser(id);
      render();
    });
  });

  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const li = btn.closest("li");
      const id = li.dataset.id;
      const currentName = li.querySelector(".uname").textContent;

      li.innerHTML = `
        <input class="edit-input" value="${currentName}" />
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
      `;

      li.querySelector(".save-btn").addEventListener("click", async () => {
        const newName = li.querySelector(".edit-input").value.trim();
        if (!newName) return;
        await updateUser(id, { name: newName });
        render();
      });

      li.querySelector(".cancel-btn").addEventListener("click", render);
    });
  });
}

render();
