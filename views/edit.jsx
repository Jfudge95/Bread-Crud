const React = require("react");
const Default = require("./layouts/default");

function Edit({ bread, bakers }) {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" defaultValue={bread.image} />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.baker}>
          {bakers.map((baker) => {
            return (
              <option key={baker.id} value={baker.id}>
                {baker.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked={bread.hasGluten}
        />
        <br /> <input type="submit" />
      </form>
    </Default>
  );
}
module.exports = Edit;

//We added the defaultValue for our baker because when we edit the bread, we want the default baker in the edit panel to be the baker that originally baked that bread. Ref: line 20
