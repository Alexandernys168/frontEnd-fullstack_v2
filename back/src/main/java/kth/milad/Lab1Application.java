package kth.milad;

import jakarta.annotation.PostConstruct;

import kth.milad.service.DataInitializationService;
import kth.milad.service.IService;
import kth.milad.service.PatientServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;


@SpringBootApplication
public class Lab1Application /*implements CommandLineRunner*/ {

	private DataInitializationService dataInitializationService;
	//private final JdbcTemplate jdbcTemplate;

	@Autowired
	public Lab1Application(DataInitializationService dataInitializationService/*, JdbcTemplate jdbcTemplate*/) {
		this.dataInitializationService = dataInitializationService;
		//this.jdbcTemplate = jdbcTemplate;
	}
	public static void main(String[] args) {
		SpringApplication.run(Lab1Application.class, args);

		/*List<Msg> msgList = new ArrayList<>();
		List<Encounter> encounters = new ArrayList<>();
		Patient p = new Patient(1,"milad hård kodad",msgList,encounters);

		PatientServiceImp patientServiceImp = new PatientServiceImp();
		patientServiceImp.createPatient(p);*/
	}

	@PostConstruct
	public void init() {
		dataInitializationService.initializeData();
	}

/*
	@Override
	public void run(String... args) throws Exception {
		// Run your SQL query to drop the table here
		String dropTableQuery = "DROP TABLE IF EXISTS miladalexdb";
		jdbcTemplate.execute(dropTableQuery);
		String dropEncounterId ="ALTER TABLE observation AND DROP FOREIGN KEY encounter_id";
		jdbcTemplate.execute((dropEncounterId));

		dataInitializationService.initializeData();

		// Add any other initialization logic you need
	}

*/

}
