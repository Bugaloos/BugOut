const React = require('react')
const { connect } = require('react-redux')

function Messageboard(props) {
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
