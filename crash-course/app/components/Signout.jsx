
import { doSignOut } from "../actions"

const Signout = () => {
  return (
    <form action={doSignOut}>
        <button type="submit">Sign Out</button>
    </form>
  )
}

export default Signout