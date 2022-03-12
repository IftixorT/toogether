const ListGroup = ({items, selectedItem, onSelect, valueKey, idKey, img}) => {
	return (
		<div className="Mcategories">
			{items.map(item => (
				<div
					key={item[idKey]}
					className={`Mcategory ${item[idKey] === selectedItem ? 'active' : ''}
          }`}
					onClick={() => onSelect(item[idKey])}
				>
					<span className="span">{item[valueKey]}</span>
					<img src={item[img]} />
				</div>
			))}
		</div>
	)
}

ListGroup.defaultProps = {
	valueKey: 'name',
	idKey: '_id',
	img: 'img',
}

export default ListGroup
