package fr.ouestfrance.platform.api;

import fr.ouestfrance.platform.domain.ParkData;
import fr.ouestfrance.platform.schemas.blocprovider.BlockData;
import fr.ouestfrance.platform.schemas.blocprovider.Data;
import fr.ouestfrance.platform.schemas.blocprovider.External_;
import fr.ouestfrance.platform.schemas.blocprovider.Internal;
import fr.ouestfrance.platform.schemas.citedia.Park;
import fr.ouestfrance.platform.schemas.citedia.Parks;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class BlockDataController {

    private static final DateFormat DF = new SimpleDateFormat("dd-MM-yyyy HH:mm");

    @Value("${api.citedia.url}")
    private String apiCitediaURL;

    private RestTemplate restTemplate = new RestTemplate();

    @RequestMapping(value = "/blockdata", method = RequestMethod.GET)
    public BlockData getBlockData(@RequestParam(value = "parking", required = false) String name) {
        BlockData blockData = new BlockData();

        Internal internal = new Internal();
        blockData.setInternal(internal);

        Data data = new Data();
        internal.setData(data);

        data.setAdditionalProperty("date", DF.format(new Date()));

        List<ParkData> parkDataList = new ArrayList<>();
        data.setAdditionalProperty("parks", parkDataList);

        Parks parks = restTemplate.getForEntity(apiCitediaURL, Parks.class).getBody();
        for (Park park : parks.getParks()) {
            Map<String, Object> info = (Map) park.getParkInformation();

            if (info != null) {
                ParkData parkData = new ParkData();

                parkData.setName((String) info.get("name"));
                String status = (String) info.get("status");
                parkData.setFull(status.equals("FULL"));
                parkData.setClosed(status.equals("CLOSED"));
                parkData.setAvailable((Integer) info.get("free"));
                parkData.setMax((Integer) info.get("max"));

                if (org.apache.commons.lang3.StringUtils.isEmpty(name) || parkData.getName().equalsIgnoreCase(name)) {
                    parkDataList.add(parkData);
                }
            }
        }

        External_ external = new External_();
        blockData.setExternal(external);

        return blockData;
    }

}
