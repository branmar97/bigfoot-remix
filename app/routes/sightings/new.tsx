export default function NewSightingRoute() {
    return (
        <div>
            <p>Report your sighting</p>
            <form method="post">
            <div>
                <label>
                Occurence: <input type="datetime-local" id="occurence" name="occurence" />
                </label>
            </div>
            <div>
                <label>
                City: <input type="text" id="city" name="city" />
                </label>
            </div>
            <div>
                <label>
                State: <input type="text" id="state" name="state" />
                </label>
            </div>
            <div>
                <label>
                Vicinity: <textarea id="vicinity" name="vicinity" placeholder="Type a general description of where the sighting occured" />
                </label>
            </div>
            <div>
                <label>
                Conditions: <textarea id="conditions" name="conditions" />
                </label>
            </div>
            <div>
                <label>
                # Witnesses: <input type="number" id="witnesses" name="witnesses" />
                </label>
            </div>
            <div>
                <label>
                Evidence: <textarea id="evidence" name="evidence" />
                </label>
            </div>
            <div>
                <label>
                Details: <textarea id="details" name="details" />
                </label>
            </div>
            <div>
                <button type="submit" className="button">
                Submit
                </button>
            </div>
            </form>
        </div>
    );
}