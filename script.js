//your JS code here. If required.
const Title=document.querySelector("#title");
const Author=document.querySelector("#author");
const Isbn=document.querySelector("#isbn");
const submitButton=document.querySelector("#submit");

const tableData=document.querySelector("#book-list");
submitButton.addEventListener('click',(e)=>{
	e.preventDefault();

	const newRow=document.createElement('tr');
	newRow.innerHTML=`<tr>
<td>${Title.value}</td>
<td>${Author.value}</td>
<td>${Isbn.value}</td>
<td class="delete">❌</td>
</tr>`
	tableData.append(newRow)
	Title.value="";
	Author.value="";
	Isbn.value="";
});

tableData.addEventListener('click',(e)=>{
	if(e.target.classList.contains("delete")){
	e.target.parentNode.parentNode.remove();
	}
})