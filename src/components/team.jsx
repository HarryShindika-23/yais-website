export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the team</h2>
        </div>

        {/* <div id="row">
          <ul>
            {props.data ? props.data.map((d, i) => (
                  <li>
                    <div className="team">
                      <div className="team-img">
                        <img
                          style={{
                            maxHeight: "400px",
                            maxWidth: "400px",
                          }}
                          src={d.img}
                          alt=""
                        />
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </li>
                ))
              : "loading"}
          </ul>
        </div> */}

        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="polaroid">
                    <div className="thumbnail">
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
