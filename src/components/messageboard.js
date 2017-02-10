const React = require('react')
const { connect } = require('react-redux')

// This compenent will require a group ID, and based upon this will search for all messages that have been posted to the group with that id

function Messageboard (props) {
  return (
    <div>
        <div>
            <div>
                <span>Comments</span>
                <ul></ul>
            </div>
            <div>
                <form>
                    <div>
                        <input id="nick" name="nick" type="text">
                        <label>Name</label>
                    </div>
                    <div>
                        <input id="message" name="message" type="text">
                        <label>Message</label>
                    </div>
                    <div>
                        <button id="add">post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

module.exports = connect((state) => state)(Messageboard)
