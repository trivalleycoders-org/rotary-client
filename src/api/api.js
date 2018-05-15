import { fetchJson } from './api-helpers'
import { pink } from 'logger'

export default {
  members: {
    create() {
      // log('api.members.create: member', member, 'orange')
      return fetchJson(
        '/members',
        {
          method: 'POST',
        }
      ).then((id) => {
        return id
      })
    },
    read() {
      // yellow('** read **')
      return fetchJson(
        '/members',
        { method: 'GET' }
      )
    },
    patch(member) {
      //ku.log('api.members.update: id', id, 'orange')
      //ku.log('api.members.update: member', member, 'orange')
      pink('api.patch: member', member)
      const _id = member._id
      return fetchJson(
        `/members/${_id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ member })
        }
      )
    },
    delete(id) {
      return fetchJson(
        `/members/${id}`,
        {
          method: 'DELETE'
        }
      )
      .then((data) => {
        // console.log(data)
        return data.affectedRows ? id : -1
      })
    },
  },
}
