function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          // Without the `key`, React will fire a key warning
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }