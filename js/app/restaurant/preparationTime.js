import dragula from 'dragula'

const preparationTimeRules = $('#preparation_time_rules_preparationTimeRules')

const onListChange = () => {
  preparationTimeRules.children().each((index, el) => {
    $(el).find('input[type="hidden"]').val(index)
  })
}

const drake = dragula([ document.querySelector('#preparation_time_rules_preparationTimeRules') ], {})
.on('dragend', () => onListChange())

$('#add-rule').on('click', (e) => {

  e.preventDefault()

  let html = preparationTimeRules
    .attr('data-prototype')
    .replace(/__name__/g, preparationTimeRules.children().length)

  preparationTimeRules.append(html)

  onListChange()
})