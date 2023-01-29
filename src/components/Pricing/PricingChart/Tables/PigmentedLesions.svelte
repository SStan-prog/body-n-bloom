<div class="tables double">
  <table class="table">
    <tr>
      <th> Treatment </th>
      <th> Price</th>
    </tr>
    <tr
      ><td>Face Full</td>
      <td>$225</td></tr
    >
    <tr
      ><td>Face & Neck</td>
      <td>$250</td></tr
    >
    <tr
      ><td>Face & Hands</td>
      <td>$279</td></tr
    >
    <tr
      ><td>Face, Neck and Chest</td>
      <td>$479</td></tr
    >
  </table>
  <table class="table">
    <tr>
      <th> Treatment </th>
      <th> Price</th>
    </tr>
    <tr
      ><td>Neck & Chest</td>
      <td>$395</td></tr
    >
    <tr
      ><td>Arms & Hands</td>
      <td>$379</td></tr
    >
    <tr
      ><td>Hands Only</td>
      <td>$80</td></tr
    >
    <tr
      ><td>Single Lesions</td>
      <td>$30 / per pulse</td></tr
    >
  </table>
</div>

<style lang="scss">
  .tables {
    padding: 5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2.5rem;
  }

  .table {
    text-align: left;
    width: 100%;
    max-width: 40rem;

    & th {
      padding: 0.5rem;
      background-color: var(--color-blue);

      color: var(--color-white);

      &:first-child {
        padding-left: 1rem;
        border-radius: 5px 0 0 0;
      }

      &:last-child {
        padding-right: 1rem;
        border-radius: 0 5px 0 0;
      }
    }

    & tr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      border-right: solid 2px var(--color-blue);
      border-left: solid 2px var(--color-blue);

      &:nth-child(odd) {
        background-color: rgb(250, 249, 249);
      }

      &:first-child {
        border-top: solid 2px var(--color-blue);
        border-radius: 8px 8px 0 0;
        background-color: transparent;
      }

      &:last-child {
        border-bottom: solid 2px var(--color-blue);
        border-radius: 0 0 8px 8px;
      }
    }
    & td {
      padding: 0.5rem;
    }
  }
</style>
