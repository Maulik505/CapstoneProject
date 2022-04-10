package com.expensemanager.statistics.repository;

import com.expensemanager.statistics.domain.timeseries.DataPoint;
import com.expensemanager.statistics.domain.timeseries.DataPointId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DataPointRepository extends CrudRepository<DataPoint, DataPointId> {

	List<DataPoint> findByIdAccount(String account);

}
