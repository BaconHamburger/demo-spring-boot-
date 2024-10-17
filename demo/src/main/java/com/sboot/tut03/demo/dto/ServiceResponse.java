package com.sboot.tut03.demo.dto;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import com.sboot.tut03.demo.dto.Book;

/*@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString*/
public class ServiceResponse<Book> {
	
	private String status;
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Book getData() {
		return data;
	}

	public void setData(Book data) {
		this.data = data;
	}

	private Book data;
	
	public ServiceResponse(String status, Book data) {
		this.status = status;
		this.data = data;
	}
	
	public ServiceResponse() {}

}
